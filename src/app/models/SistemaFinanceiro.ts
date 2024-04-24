export class SistemaFinanceiro
{
    id: number;
    nome: string;
    mes: number;
    ano: number;
    diaFechamento: number;
    gerarCopiadespesa: boolean;
    mesCopia: number;
    anoCopia: number;

    nomePropriedade: string = "";
    mensagem: string = "";
    notificacao:[]=[];
}
