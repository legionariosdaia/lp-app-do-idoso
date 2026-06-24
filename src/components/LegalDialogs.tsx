import { useState, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type DocKey = "termos" | "privacidade" | "reembolso" | "lgpd";

const COMPANY = "App do Idoso";
const SITE = "appdoidoso.com.br";
const CONTACT_EMAIL = "contato@appdoidoso.com.br";
const DPO_EMAIL = "privacidade@appdoidoso.com.br";
const UPDATED = "Janeiro de 2025";

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="space-y-2">
    <h3 className="font-bold text-foreground text-base mt-4">{title}</h3>
    <div className="text-sm text-foreground/80 leading-relaxed space-y-2">{children}</div>
  </section>
);

const docs: Record<DocKey, { title: string; body: ReactNode }> = {
  termos: {
    title: "Termos de Uso",
    body: (
      <>
        <p className="text-sm text-foreground/70 italic">Última atualização: {UPDATED}</p>
        <p className="text-sm text-foreground/80">
          Bem-vindo ao {COMPANY}. Ao acessar ou utilizar nosso aplicativo e site ({SITE}), você concorda com os
          presentes Termos de Uso. Leia atentamente antes de utilizar nossos serviços.
        </p>

        <Section title="1. Aceitação dos Termos">
          <p>
            Ao baixar, instalar, acessar ou usar o {COMPANY}, você declara ter lido, compreendido e
            concordado integralmente com estes Termos. Caso não concorde, não utilize o serviço.
          </p>
        </Section>

        <Section title="2. Descrição do Serviço">
          <p>
            O {COMPANY} é um aplicativo voltado à saúde, segurança e bem-estar de pessoas idosas, oferecendo
            funcionalidades como botão de SOS, lembretes de medicamentos, agenda de consultas, controle de
            vacinas, jogos cognitivos, assistente de IA e indicação de médicos. O serviço é informativo e
            de apoio, não substituindo, em hipótese alguma, atendimento médico, diagnóstico ou tratamento
            profissional.
          </p>
        </Section>

        <Section title="3. Cadastro e Conta do Usuário">
          <p>
            Para utilizar funcionalidades específicas, o usuário deverá criar uma conta, fornecendo
            informações verdadeiras, completas e atualizadas. O usuário é responsável pela guarda de sua
            senha e por todas as atividades realizadas em sua conta.
          </p>
        </Section>

        <Section title="4. Período de Teste Gratuito">
          <p>
            Oferecemos 7 (sete) dias de teste gratuito, sem necessidade de cartão de crédito. Ao final do
            período, o usuário poderá optar por contratar um plano pago. Caso não contrate, o acesso às
            funcionalidades pagas será encerrado automaticamente.
          </p>
        </Section>

        <Section title="5. Planos e Pagamentos">
          <p>
            Os planos disponíveis (Individual e Familiar) estão descritos em nossa página de preços. Os
            pagamentos são processados por meios seguros, e a renovação ocorre conforme a periodicidade
            contratada, podendo ser cancelada pelo usuário a qualquer momento.
          </p>
        </Section>

        <Section title="6. Uso Adequado">
          <p>O usuário compromete-se a não:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Utilizar o serviço para fins ilícitos ou que violem direitos de terceiros;</li>
            <li>Tentar acessar áreas restritas ou comprometer a segurança da plataforma;</li>
            <li>Reproduzir, copiar, modificar ou distribuir o conteúdo sem autorização;</li>
            <li>Inserir informações falsas, ofensivas ou enganosas.</li>
          </ul>
        </Section>

        <Section title="7. Botão de SOS e Emergências">
          <p>
            O recurso de SOS é uma ferramenta de apoio que aciona contatos previamente cadastrados pelo
            usuário. Não substitui o acionamento dos serviços oficiais de emergência (SAMU 192, Bombeiros
            193, Polícia 190). Em situações de risco, ligue imediatamente para os serviços oficiais.
          </p>
        </Section>

        <Section title="8. Propriedade Intelectual">
          <p>
            Todos os direitos relativos ao aplicativo, marca, conteúdo, design, código e materiais são de
            propriedade exclusiva do {COMPANY}, protegidos pela legislação brasileira e internacional.
          </p>
        </Section>

        <Section title="9. Limitação de Responsabilidade">
          <p>
            O {COMPANY} não se responsabiliza por decisões médicas tomadas com base em informações do app,
            falhas de conexão de internet, indisponibilidades temporárias do serviço ou danos indiretos
            decorrentes do uso. As informações fornecidas têm caráter informativo e educacional.
          </p>
        </Section>

        <Section title="10. Alterações dos Termos">
          <p>
            Podemos atualizar estes Termos periodicamente. As alterações entrarão em vigor a partir da
            publicação no aplicativo. O uso continuado após a atualização representa concordância com a
            nova versão.
          </p>
        </Section>

        <Section title="11. Lei Aplicável e Foro">
          <p>
            Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da
            comarca do domicílio do consumidor para dirimir eventuais controvérsias.
          </p>
        </Section>

        <Section title="12. Contato">
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail{" "}
            <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </>
    ),
  },
  privacidade: {
    title: "Política de Privacidade",
    body: (
      <>
        <p className="text-sm text-foreground/70 italic">Última atualização: {UPDATED}</p>
        <p>
          A sua privacidade é prioridade para o {COMPANY}. Esta Política descreve como coletamos, usamos,
          armazenamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de
          Dados (Lei nº 13.709/2018 – LGPD).
        </p>

        <Section title="1. Dados que Coletamos">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Dados cadastrais:</strong> nome, e-mail, telefone, data de nascimento.</li>
            <li><strong>Dados de saúde:</strong> medicamentos, consultas, vacinas e lembretes inseridos pelo usuário.</li>
            <li><strong>Contatos de emergência:</strong> nomes e telefones cadastrados para SOS.</li>
            <li><strong>Dados técnicos:</strong> modelo do dispositivo, sistema operacional, IP, identificadores e dados de uso.</li>
            <li><strong>Localização:</strong> apenas quando o usuário autoriza, para acionamento de SOS.</li>
          </ul>
        </Section>

        <Section title="2. Finalidades do Tratamento">
          <ul className="list-disc pl-5 space-y-1">
            <li>Fornecer e personalizar as funcionalidades do app;</li>
            <li>Enviar lembretes de medicamentos, consultas e vacinas;</li>
            <li>Permitir o acionamento de contatos em emergências;</li>
            <li>Melhorar a experiência, segurança e estabilidade do serviço;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </Section>

        <Section title="3. Base Legal">
          <p>
            O tratamento de dados ocorre com base no consentimento do titular, na execução do contrato, no
            cumprimento de obrigação legal, na proteção da vida e do legítimo interesse, conforme art. 7º
            e 11 da LGPD.
          </p>
        </Section>

        <Section title="4. Compartilhamento de Dados">
          <p>
            Não vendemos dados pessoais. Podemos compartilhar com prestadores de serviços (hospedagem,
            pagamentos, comunicação) sob obrigação contratual de sigilo, ou quando exigido por autoridade
            competente.
          </p>
        </Section>

        <Section title="5. Armazenamento e Segurança">
          <p>
            Adotamos medidas técnicas e organizacionais como criptografia, controle de acesso e
            monitoramento contínuo. Os dados são armazenados em servidores seguros, podendo estar no Brasil
            ou no exterior, sempre observando padrões adequados de proteção.
          </p>
        </Section>

        <Section title="6. Retenção dos Dados">
          <p>
            Os dados são mantidos pelo tempo necessário para cumprir as finalidades descritas ou as
            obrigações legais. Após esse período, são eliminados ou anonimizados de forma segura.
          </p>
        </Section>

        <Section title="7. Direitos do Titular">
          <p>O titular pode, a qualquer momento, solicitar:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso, correção, anonimização ou eliminação dos dados;</li>
            <li>Portabilidade;</li>
            <li>Revogação do consentimento.</li>
          </ul>
          <p>
            Solicitações devem ser enviadas para{" "}
            <a className="text-primary underline" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </Section>

        <Section title="8. Cookies">
          <p>
            Utilizamos cookies e tecnologias similares para autenticação, métricas e melhoria da
            experiência. O usuário pode gerenciar preferências no próprio navegador.
          </p>
        </Section>

        <Section title="9. Crianças e Adolescentes">
          <p>
            O {COMPANY} é destinado a adultos. Não coletamos intencionalmente dados de menores de 18 anos
            sem o consentimento de seus responsáveis.
          </p>
        </Section>

        <Section title="10. Alterações nesta Política">
          <p>
            Podemos atualizar esta Política periodicamente. Recomendamos consultar regularmente. A
            continuidade do uso após mudanças representa concordância.
          </p>
        </Section>
      </>
    ),
  },
  reembolso: {
    title: "Política de Reembolso",
    body: (
      <>
        <p className="text-sm text-foreground/70 italic">Última atualização: {UPDATED}</p>
        <p>
          Queremos que sua experiência com o {COMPANY} seja excelente. Por isso, oferecemos uma política
          de reembolso clara, em conformidade com o Código de Defesa do Consumidor (Lei nº 8.078/1990).
        </p>

        <Section title="1. Direito de Arrependimento – 7 dias">
          <p>
            Conforme o art. 49 do CDC, o usuário tem o direito de desistir da contratação no prazo de{" "}
            <strong>7 (sete) dias corridos</strong>, contados a partir da data da assinatura ou da
            confirmação do pagamento, recebendo reembolso integral do valor pago.
          </p>
        </Section>

        <Section title="2. Período de Teste Gratuito">
          <p>
            Antes de qualquer cobrança, oferecemos <strong>7 dias de teste gratuito sem cartão de crédito</strong>,
            permitindo avaliar o app com tranquilidade. Nenhum valor é cobrado durante esse período.
          </p>
        </Section>

        <Section title="3. Como Solicitar o Reembolso">
          <ol className="list-decimal pl-5 space-y-1">
            <li>
              Envie um e-mail para{" "}
              <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
              com o assunto <em>"Solicitação de Reembolso"</em>.
            </li>
            <li>Informe nome completo, CPF, e-mail de cadastro e data do pagamento.</li>
            <li>Anexe, se possível, o comprovante da transação.</li>
          </ol>
        </Section>

        <Section title="4. Prazos de Processamento">
          <p>
            Após a confirmação dos dados, o reembolso é processado em até <strong>7 dias úteis</strong>.
            O valor será restituído pelo mesmo meio utilizado no pagamento (cartão de crédito, PIX,
            boleto), podendo levar até dois ciclos de fatura para aparecer no extrato, conforme
            política da operadora.
          </p>
        </Section>

        <Section title="5. Cancelamento Após o Prazo de 7 Dias">
          <p>
            Após o prazo legal, o usuário pode cancelar a assinatura a qualquer momento, encerrando
            cobranças futuras. Valores já pagos referentes ao período em curso não são reembolsáveis,
            mas o acesso permanece ativo até o fim do ciclo contratado.
          </p>
        </Section>

        <Section title="6. Casos Não Cobertos">
          <ul className="list-disc pl-5 space-y-1">
            <li>Solicitações feitas após o prazo de 7 dias de arrependimento;</li>
            <li>Uso indevido, fraude ou descumprimento dos Termos de Uso;</li>
            <li>Compras de planos promocionais expressamente identificados como não reembolsáveis.</li>
          </ul>
        </Section>

        <Section title="7. Suporte">
          <p>
            Dúvidas sobre cobranças e reembolsos:{" "}
            <a className="text-primary underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </Section>
      </>
    ),
  },
  lgpd: {
    title: "LGPD – Lei Geral de Proteção de Dados",
    body: (
      <>
        <p className="text-sm text-foreground/70 italic">Última atualização: {UPDATED}</p>
        <p>
          O {COMPANY} é totalmente comprometido com a Lei nº 13.709/2018 (LGPD), assegurando
          transparência, segurança e respeito aos direitos dos titulares de dados pessoais.
        </p>

        <Section title="1. Princípios Adotados">
          <ul className="list-disc pl-5 space-y-1">
            <li>Finalidade legítima, específica e informada;</li>
            <li>Adequação e necessidade no tratamento;</li>
            <li>Livre acesso e qualidade dos dados;</li>
            <li>Transparência sobre o tratamento;</li>
            <li>Segurança, prevenção e responsabilização;</li>
            <li>Não discriminação no uso dos dados.</li>
          </ul>
        </Section>

        <Section title="2. Direitos do Titular (Art. 18 da LGPD)">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados pessoais;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
            <li>Portabilidade dos dados a outro fornecedor;</li>
            <li>Eliminação dos dados tratados com consentimento;</li>
            <li>Informação sobre entidades com as quais os dados foram compartilhados;</li>
            <li>Informação sobre a possibilidade de não fornecer o consentimento e suas consequências;</li>
            <li>Revogação do consentimento.</li>
          </ol>
        </Section>

        <Section title="3. Encarregado de Dados (DPO)">
          <p>
            Nosso Encarregado de Proteção de Dados pode ser contatado pelo e-mail:{" "}
            <a className="text-primary underline" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </Section>

        <Section title="4. Como Exercer Seus Direitos">
          <p>
            Envie uma solicitação para o e-mail do DPO contendo nome completo, CPF e descrição do pedido.
            Atenderemos no prazo legal de até 15 (quinze) dias, conforme art. 19 da LGPD. Para validar a
            identidade, podemos solicitar documentos adicionais.
          </p>
        </Section>

        <Section title="5. Medidas de Segurança">
          <p>
            Aplicamos criptografia, controle de acesso, segregação de ambientes, backups e auditorias.
            Em caso de incidente que possa gerar risco aos titulares, comunicaremos a ANPD e os
            envolvidos conforme art. 48 da LGPD.
          </p>
        </Section>

        <Section title="6. Transferência Internacional">
          <p>
            Eventuais transferências internacionais ocorrem apenas para países com nível adequado de
            proteção ou mediante garantias específicas previstas na LGPD.
          </p>
        </Section>

        <Section title="7. Autoridade Nacional (ANPD)">
          <p>
            Caso considere seus direitos violados, o titular pode apresentar reclamação diretamente à
            Autoridade Nacional de Proteção de Dados –{" "}
            <a
              className="text-primary underline"
              href="https://www.gov.br/anpd"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.gov.br/anpd
            </a>
            .
          </p>
        </Section>

        <Section title="8. Contato">
          <p>
            Dúvidas, solicitações ou reclamações relativas à LGPD:{" "}
            <a className="text-primary underline" href={`mailto:${DPO_EMAIL}`}>{DPO_EMAIL}</a>.
          </p>
        </Section>
      </>
    ),
  },
};

export function LegalLinks({ className }: { className?: string }) {
  const [open, setOpen] = useState<DocKey | null>(null);

  const items: { key: DocKey; label: string }[] = [
    { key: "termos", label: "Termos de Uso" },
    { key: "privacidade", label: "Política de Privacidade" },
    { key: "reembolso", label: "Política de Reembolso" },
    { key: "lgpd", label: "LGPD" },
  ];

  return (
    <>
      <ul className={className ?? "space-y-2 text-sm text-background/60"}>
        {items.map((it) => (
          <li key={it.key}>
            <button
              type="button"
              onClick={() => setOpen(it.key)}
              className="hover:text-background transition-colors text-left"
            >
              {it.label}
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl max-h-[85vh] bg-background text-foreground">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">
              {open && docs[open].title}
            </DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[70vh] pr-4">
            <div className="space-y-3 pb-4">{open && docs[open].body}</div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
