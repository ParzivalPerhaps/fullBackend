import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true, select: false},
    password: {type: String, required: true, select: false},
    socialScienceQuestionsAnswered: {type: Number, required: false, select: false},
    socialScienceQuestionsCorrect: {type: Number, required: false, select: false},
    scienceQuestionsAnswered: {type: Number, required: false, select: false},
    scienceQuestionsCorrect: {type: Number, required: false, select: false},
    econQuestionsAnswered: {type: Number, required: false, select: false},
    econQuestionsCorrect: {type: Number, required: false, select: false},
    litQuestionsAnswered: {type: Number, required: false, select: false},
    litQuestionsCorrect: {type: Number, required: false, select: false},
    artQuestionsAnswered: {type: Number, required: false, select: false},
    artQuestionsCorrect: {type: Number, required: false, select: false},
    musicQuestionsAnswered: {type: Number, required: false, select: false},
    musicQuestionsCorrect: {type: Number, required: false, select: false},
    mathQuestionsAnswered: {type: Number, required: false, select: false},
    mathQuestionsCorrect: {type: Number, required: false, select: false},

    questionNumSetting: {type: Number, required: false, select: false},
    liveCorrectionsSetting: {type: Boolean, required: false, select: false},
    pageNumbersSetting: {type: Boolean, required: false, select: false},
});

type User = InferSchemaType<typeof userSchema>;

export default model<User>("User", userSchema);