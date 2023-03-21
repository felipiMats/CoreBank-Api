import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { OperationType } from '../../entities/Statement';

import { TransferStatementUseCase } from './TransferStatementUseCase';


export class TransferStatementController {
  async execute(request: Request, response: Response) {
    const { user_id } = request.params;
    const { id } =  request.user;
    const { amount, description } = request.body;
    
    const transferStatement = container.resolve(TransferStatementUseCase);

    const statement = await transferStatement.execute({
        sender_id: id,
        received_id: user_id,
        amount,
        description,
        type: 'transfer' as OperationType,
        created_at: new Date(),
        updated_at: new Date(),
    });

    return response.status(201).json(statement);
  }
}
