const Book = require('../models/Book');
const User = require('../models/User');

const resolvers = {
    Query: {
        me(parent, args){
            return User.findById(args.id);
        },
        allUsers(){
            return User.find();
        }
    },
    Mutation: {
        addUser(parent, args){
            const user = new User({
                username: args.username,
                email: args.email,
                password: args.password
            });

            return user.save();
        },
        async login(parent, args){
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });
            if (!user) {
                return "No such user";
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                return "Incorrect password";
            }
            return user._id;
        },
        async deleteBook(parent, args){
            const updatedUser = await User.findOneAndUpdate(
                { _id: args.userId },
                { $pull: { savedBooks: { bookId: args.bookId } } },
                { new: true }
              );
            if (!updatedUser) {
                return "Couldn't find user with this id!";
            }
            return UserType.findById(args.userId);
        },
        async addBook(parent, args){
            try {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: user._id },
                    { $addToSet: { savedBooks: body } },
                    { new: true, runValidators: true }
                );
                return res.json(updatedUser);
            } catch (err) {
                console.log(err);
                return res.status(400).json(err);
            }
        }
    }

}

module.exports = {resolvers}