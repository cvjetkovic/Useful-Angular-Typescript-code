import { Injectable } from "@angular/core";

@Injectable()
export class DateFormatter {

    formatDate(type: any, date: Date) {
        if (date != undefined) {
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            let formattedDate: string;
            formattedDate = year + "-" + month + "-" + day;
            if (type == 'from') {
                formattedDate += " " + "00:00:00";
                // console.log(formattedDate);

                return formattedDate;
            }
            if (type == 'to') {
                formattedDate += " " + "23:59:59";
                // console.log(formattedDate);
                return formattedDate;
            }
        } else {
            return null;
        }
    }


    formatDate2(date) {
        const event = new Date(date);
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        return event.toLocaleDateString('sr', options);
    }

}
