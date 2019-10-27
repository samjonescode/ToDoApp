export class Todo {
    // text: string;
    // id: number;
    // isComplete: boolean;
    // submittedAt: any;
    // completedAt: any;

    constructor(public text: string, public id: number, public isComplete: boolean = false, 
        public submittedAt: any, public completedAt?: any){}
}