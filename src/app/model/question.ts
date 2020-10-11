import { Answer } from './answer';

export class Question {
    questionId:BigInteger;
    isMultipleChoice:Boolean;
    question:String;
    answer:Answer[];
}
