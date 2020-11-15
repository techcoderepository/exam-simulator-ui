import { Certification } from '../certification';
import { User } from '../User';

export class Question {
    questionId:BigInteger;
    answerType:String;
    question:String;
    answer:Array<Answer>;   
    certification:Certification; 
}

export class Answer {
    answerId:BigInteger;	
	answer:String;	
	correct:Boolean;	
	question:BigInteger;
}

export class UserQuestionResponse {
    userQuestionResponseId:BigInteger;
    user:User;
    question:Question;
    optionResponse:Array<OptionResponse>;    
}

export class OptionResponse {
    OptionResponseId:BigInteger
    answer:Answer;
    userResponse:Boolean;
    userQuestionResponseId:BigInteger
}

