import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../../../users/repositories/IUsersRepository";
import { OperationType } from "../../entities/Statement";
import { IStatementsRepository } from "../../repositories/IStatementsRepository";
import { CreateStatementError } from "../createStatement/CreateStatementError";
import { ITransferStatementDTO } from "./ITransferStatementDTO";


@injectable()
class TransferStatementUseCase {
  
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('StatementsRepository')
    private statementsRepository: IStatementsRepository
  ) {}

  async execute({
    sender_id,
    received_id,
    amount,
    description,
    type,
    created_at,
    updated_at}: ITransferStatementDTO) {
    const user = await this.usersRepository.findById(received_id);
    
    if(!user) {
      throw new CreateStatementError.UserNotFound();
    }

    if(type === 'withdraw' || 'transfer') {
      const { balance } = await this.statementsRepository.getUserBalance({ user_id: sender_id });
    

      if (balance < amount) {
        throw new CreateStatementError.InsufficientFunds()
      }
    }

    await this.statementsRepository.create({
      user_id: sender_id,
      amount,
      description: 'Retirada por transferência',
      type: 'withdraw' as OperationType,
      created_at,
      updated_at
    });


    const TransferStatement = await this.statementsRepository.create({
      user_id: received_id,
      amount,
      description,
      type: 'deposit' as OperationType,
      created_at,
      updated_at
    });

    return TransferStatement
    ;
  }

}

export { TransferStatementUseCase }