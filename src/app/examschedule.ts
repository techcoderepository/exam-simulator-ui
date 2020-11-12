import { Time } from '@angular/common';
import { Certification } from './certification';
import { User } from './User';

export class Examschedule {
    examScheduleId:BigInteger;
    certification:Certification;
    examDate:Date ;	
    examTime:Time ;	 
    user: User;   
}
