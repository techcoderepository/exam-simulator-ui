import { Time } from '@angular/common';
import { Certification } from './certification';
import { Users } from './Users';

export class Examschedule {
    examScheduleId:BigInteger;
    certification:Certification;
    examDate:Date ;	
    examTime:Time ;	 
    user: Users;   
}
