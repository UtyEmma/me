import moment, { Moment } from "moment";

export class Date {

    static toDateTimeString(date: string){
        return moment(date).format("Do MMM YYYY, LT")
    }

    static toDateString(date: string){
        return moment(date).format("Do MMM YYYY")
    }

}



