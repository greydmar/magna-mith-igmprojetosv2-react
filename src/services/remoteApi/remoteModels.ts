// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ServerModels{


/**
 *
 * @export
 * @interface CodigoIndice
 */
export interface CodigoIndice {
}

/**
 *
 * @export
 * @enum {string}
 */
export enum SituacaoQuestionario {
    Disponivel = 'Disponivel',
    EmPreenchimento = 'EmPreenchimento',
    Finalizado = 'Finalizado'
}

/**
 *
 *
 * @export
 * @interface Indice
 */
export interface Indice {

    /**
     * @type {string}
     * @memberof Indice
     */
    id?: string | null;

    /**
     * @type {string}
     * @memberof Indice
     */
    nomeIndice?: string | null;

    /**
     * @type {string}
     * @memberof Indice
     */
    descricao?: string | null;
}

/**
 *
 *
 * @export
 * @interface Questao
 */
export interface Questao {

    /**
     * @type {string}
     * @memberof Questao
     */
    id?: string | null;

    /**
     * @type {string}
     * @memberof Questao
     */
    idQuestionario?: string | null;

    /**
     * @type {string}
     * @memberof Questao
     */
    textoApresentado?: string | null;

    /**
     * @type {string}
     * @memberof Questao
     */
    textoJustificativa?: string | null;

    /**
     * @type {number}
     * @memberof Questao
     */
    pesoAtribuido?: number | null;

    /**
     * @type {number}
     * @memberof Questionario
     */
    versao: number;
}

/**
 *
 *
 * @export
 * @interface Questionario
 */
export interface Questionario {

    /**
     * @type {string}
     * @memberof Questionario
     */
    id?: string | null;

    /**
     * @type {string}
     * @memberof Questionario
     */
    codigoIndice?: string | null;

    /**
     * @type {number}
     * @memberof Questionario
     */
    valorIGF?: number | null;
    
    /**
     * @type {SituacaoQuestionario}
     * @memberof Questionario
     */
    situacao?: SituacaoQuestionario;

    /**
     * @type {number}
     * @memberof Questionario
     */
    versao: number;

    /**
     * @type {Array<Questao>}
     * @memberof Questionario
     */
    items?: Array<Questao> | null;
}

/**
 *
 *
 * @export
 * @interface ReqRespostaQuestao
 */
export interface ReqRespostaQuestao {

    /**
     * @type {string}
     * @memberof ReqRespostaQuestao
     */
    id?: string | null;

    /**
     * @type {string}
     * @memberof ReqRespostaQuestao
     */
    idQuestionario?: string | null;

    /**
     * @type {string}
     * @memberof ReqRespostaQuestao
     */
    textoJustificativa?: string | null;

    /**
     * @type {number}
     * @memberof ReqRespostaQuestao
     */
    pesoAtribuido?: number | null;
}

/**
 *
 *
 * @export
 * @interface ReqRespostaQuestionario
 */
export interface ReqRespostaQuestionario {

    /**
     * @type {string}
     * @memberof ReqRespostaQuestionario
     */
    id?: string | null;

    /**
     * @type {Array<ReqRespostaQuestao>}
     * @memberof ReqRespostaQuestionario
     */
    items?: Array<ReqRespostaQuestao> | null;
}

}