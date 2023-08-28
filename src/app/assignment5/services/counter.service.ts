
export type counterType = {
    currentCount : number,
    operations: Array<string>
}

type statusType = 'ACTIVE' | 'INACTIVE'



export class CounterService{
    constructor(){}

     activeCounts: counterType = {
        currentCount : 0,
        operations: []
    }

     inactiveCounts : counterType = {
        currentCount: 0,
        operations: []
    } 

    private getOperationText(userName: string, currentStatus: statusType): string{
        return `${userName} is set to ${currentStatus}`;
    }

    updateCounter(userName: string, currentStatus: statusType){
        if(currentStatus === 'ACTIVE'){
            this.activeCounts.currentCount++;
            this.activeCounts.operations.push(this.getOperationText(userName,currentStatus))
        }else{
            this.inactiveCounts.currentCount++;
            this.inactiveCounts.operations.push(this.getOperationText(userName,currentStatus))
        }
    }

}