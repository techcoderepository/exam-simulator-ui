export class Question {
    questionId:BigInteger;
    answerType:String;
    question:String;
    answer:Array<Answer>;    
}

export class Answer {
    answerId:BigInteger;	
	answer:String;	
	correct:Boolean;	
	question:BigInteger;
}

