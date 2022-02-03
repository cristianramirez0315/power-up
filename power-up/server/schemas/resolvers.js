<<<<<<< HEAD
const { User } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
=======
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { User } = require('../models');
>>>>>>> 5d368b075dcbf69db7b6338ba098d9475f3447b7
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // me() method
      me: async (parent, args, context) => {
          if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                
                return userData;
          }

          throw new AuthenticationError('Not logged in')
      }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
                return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }

            throw new AuthenticationError('Nog logged in');
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        saveExercise: async (parent, { input }, context ) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { savedExercises: input } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in');
        }
    }
  };
  
module.exports = resolvers;