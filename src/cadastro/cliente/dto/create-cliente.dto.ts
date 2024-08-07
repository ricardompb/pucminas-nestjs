import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateClienteDto {
  @ApiProperty({ description: 'Nome do Clietne' })
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ description: 'Telefone' })
  telefone: string;

  @ApiProperty({ description: 'C.P.F, campo que armazena o número do cpf.' })
  cpf: string;

  @ApiProperty({ description: 'E-mail' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Cep', required: false })
  cep: string;

  @ApiProperty({ description: 'Endereço', required: false })
  endereco: string;

  @ApiProperty({ description: 'Número', required: false })
  numero: string;

  @ApiProperty({ description: 'Complemento', required: false })
  complemento: string;

  @ApiProperty({ description: 'Bairro', required: false })
  bairro: string;

  @ApiProperty({ description: 'Cidade', required: false })
  cidade: string;

  @ApiProperty({ description: 'Estado', required: false })
  estado: string;
}
