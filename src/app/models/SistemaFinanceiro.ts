export class SistemaFinanceiro
{
    id: number;
    nome: string;
    Mes: number;
    ano: number;
    diaFechamento: number;
    gerarCopiadespesa: boolean;
    mesCopia: number;
    anoCopia: number;

    nomePropriedade: string = "";
    mensagem: string = "";
    notificacao:[];
}
