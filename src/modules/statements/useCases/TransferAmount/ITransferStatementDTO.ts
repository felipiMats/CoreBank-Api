import { OperationType } from "../../entities/Statement";

  
interface ITransferStatementDTO {
    sender_id: string;
    received_id: string;
    amount: number;
    description: string;
    type: OperationType;
    created_at: Date;
    updated_at: Date;
}

export {ITransferStatementDTO}

