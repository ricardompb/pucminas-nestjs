import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { Cliente, Prisma } from '@prisma/client';

@Injectable()
export class ClienteService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.ClienteCreateInput): Promise<Cliente> {
    return this.prisma.cliente.create({ data });
  }

  findAll(): Promise<Cliente[]> {
    return this.prisma.cliente.findMany();
  }

  findOne(
    clienteWhereUniqueInput: Prisma.ClienteWhereUniqueInput,
  ): Promise<Cliente> {
    return this.prisma.cliente.findUnique({
      where: clienteWhereUniqueInput,
    });
  }

  update(params: {
    where: Prisma.ClienteWhereUniqueInput;
    data: Prisma.ClienteUpdateInput;
  }): Promise<Cliente> {
    const { where, data } = params;
    return this.prisma.cliente.update({
      data,
      where,
    });
  }

  remove(id: number) {
    return this.prisma.cliente.delete({
      where: { id },
    });
  }
}
