"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ApresentacaoComite = () => {
  const [slideAtual, setSlideAtual] = useState(0)

  const slides = [
    // Slide 1 - Capa
    {
      titulo: "2ª REUNIÃO",
      subtitulo: "COMITÊ DE INTEGRIDADE DO MPDFT",
      conteudo: (
        <div className="text-center space-y-8">
          <div className="text-2xl font-semibold text-blue-800">
            Data: 27/10/2025
            <br />
            Horário: 15h
            <br />
            Duração: 60 minutos
          </div>
          <div className="mt-8 space-y-3 text-xl">
            <p>
              <strong>Presidente:</strong> Claudia Tomelin - Secretária-Geral
            </p>
            <p>
              <strong>Condução:</strong> Marli Rego - Secretária de Controle Interno
            </p>
          </div>
        </div>
      ),
    },

    // Slide 2 - Abertura
    {
      titulo: "1. ABERTURA E APRESENTAÇÃO",
      subtitulo: "10 minutos",
      conteudo: (
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-xl">• Boas-vindas e contextualização</p>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <p className="font-bold text-xl mb-3">Resolução 305/CNMP</p>
            <p className="text-lg text-gray-700">
              Diretrizes para implantação de Programas de Integridade no Ministério Público
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <p className="font-bold text-xl">COMISSÃO PERMANENTE DE ÉTICA (Bruna)</p>
            <p className="text-lg text-gray-700 mt-2">Andamento da Unidade - Ações realizadas e em andamento</p>
          </div>
        </div>
      ),
    },

    // Slide 3 - Levantamento Ouvidoria
    {
      titulo: "2. LEVANTAMENTO DE RISCOS À INTEGRIDADE",
      subtitulo: "Resultados da Ouvidoria - 10 minutos",
      conteudo: (
        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="font-bold text-xl mb-4">Três Etapas do Processo:</p>
            <ul className="space-y-3 ml-4 text-lg">
              <li>• Reunião inicial e questionário</li>
              <li>• Aprofundamento da identificação de riscos</li>
              <li>• Avaliação e validação das medidas de tratamento</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <p className="font-bold text-xl mb-4">Resultados Exitosos:</p>
            <ul className="space-y-2 ml-4 text-lg">
              <li>✓ Fortalecimento dos controles internos</li>
              <li>✓ Maior transparência institucional</li>
              <li>✓ Medidas preventivas e mitigadoras</li>
              <li>✓ Aprimoramento da governança</li>
            </ul>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg mt-4">
            <p className="font-semibold text-xl text-center">Próxima Unidade: Corregedoria</p>
          </div>
        </div>
      ),
    },

    // Slide 4 - Acompanhamento SECOR
    {
      titulo: "3. ACOMPANHAMENTO DAS MEDIDAS",
      subtitulo: "Questionamentos - SECOR - 25 minutos",
      conteudo: (
        <div className="space-y-8">
          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
            <p className="font-bold text-2xl mb-6 text-purple-900">SECOR</p>
            <div className="space-y-5 text-lg">
              <div>
                <p className="font-semibold text-purple-800">• Cursos externos sobre integridade</p>
                <p className="ml-6 text-gray-700 mt-1">Localização do link na intranet</p>
              </div>
              <div>
                <p className="font-semibold text-purple-800">• Capacitação dos gestores sobre ética</p>
                <p className="ml-6 text-gray-700 mt-1">Status da realização (prevista para agosto/outubro)</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 5 - Acompanhamento SECOM e GT Assédio
    {
      titulo: "3. ACOMPANHAMENTO DAS MEDIDAS",
      subtitulo: "Questionamentos - SECOM e GT Assédio - 25 minutos",
      conteudo: (
        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-2xl mb-4 text-blue-900">SECOM</p>
            <div className="text-lg">
              <p className="font-semibold text-blue-800">• Campanhas sobre o assédio</p>
              <p className="ml-6 text-gray-700 mt-1">Detalhamento do plano de comunicação em execução</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <p className="font-bold text-2xl mb-4 text-red-900">GT MP Livre de Assédio</p>
            <div className="text-lg">
              <p className="font-semibold text-red-800">• Minutas de portaria aguardando formalização:</p>
              <ul className="ml-6 mt-2 text-gray-700 space-y-1">
                <li>- Fluxo para recepção e tratamento de denúncias</li>
                <li>- Unificação dos canais de recepção</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 6 - Acompanhamento APCES
    {
      titulo: "3. ACOMPANHAMENTO DAS MEDIDAS",
      subtitulo: "Questionamentos - APCES - 25 minutos",
      conteudo: (
        <div className="space-y-8">
          <div className="bg-green-50 p-8 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-2xl mb-6 text-green-900">APCES</p>
            <div className="text-xl">
              <p className="font-semibold text-green-800">• Diagnóstico das condições de acessibilidade</p>
              <p className="ml-6 text-gray-700 mt-3">Percentual de conclusão e áreas avaliadas</p>
              <p className="ml-6 text-gray-600 mt-2 text-lg">(Prazo: 1º semestre de 2026)</p>
            </div>
          </div>
        </div>
      ),
    },

    // Slide 7 - Sugestões de Aprimoramento
    {
      titulo: "4. SUGESTÕES PARA APRIMORAMENTO",
      subtitulo: "Do Plano de Integridade - 10 minutos",
      conteudo: (
        <div className="space-y-5">
          <div className="bg-yellow-50 p-5 rounded-lg">
            <p className="font-bold text-xl mb-2">4.1. Capacitação Continuada</p>
            <p className="ml-4 text-lg">• Trilha de aprendizagem sobre integridade (EAD)</p>
          </div>

          <div className="bg-orange-50 p-5 rounded-lg">
            <p className="font-bold text-xl mb-2">4.2. Gestão de Riscos à Integridade</p>
            <ul className="ml-4 space-y-2 text-lg">
              <li>• Ampliar levantamento para Corregedoria, Comissão de Ética e CODISC</li>
              <li>• Criar repositório centralizado</li>
              <li>• Sensibilizar membros da Comissão</li>
            </ul>
          </div>

          <div className="bg-red-50 p-5 rounded-lg">
            <p className="font-bold text-xl mb-2">4.3. Enfrentamento ao Assédio</p>
            <ul className="ml-4 space-y-2 text-lg">
              <li>• Protocolo de acolhimento às vítimas</li>
              <li>• Grupo de apoio psicossocial</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-5 rounded-lg">
            <p className="font-bold text-xl mb-2">4.4. Transparência e Prestação de Contas</p>
            <ul className="ml-4 space-y-2 text-lg">
              <li>• Relatório anual de integridade</li>
              <li>• Dados na intranet</li>
            </ul>
          </div>
        </div>
      ),
    },

    // Slide 8 - Encaminhamentos
    {
      titulo: "5. DEFINIÇÃO DE ENCAMINHAMENTOS",
      subtitulo: "E Próximos Passos - 5 minutos",
      conteudo: (
        <div className="space-y-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <ul className="space-y-4 text-2xl">
              <li>• Consolidação das deliberações</li>
              <li>• Definição de responsáveis e prazos</li>
              <li>• Data da próxima reunião</li>
            </ul>
          </div>
        </div>
      ),
    },

    // Slide 9 - Encerramento
    {
      titulo: "6. ENCERRAMENTO",
      subtitulo: "5 minutos",
      conteudo: (
        <div className="space-y-8">
          <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
            <p className="font-bold text-2xl mb-4">Observações Importantes:</p>
            <ul className="space-y-3 ml-4 text-lg text-gray-700">
              <li>
                • Respostas em até <strong>5 dias úteis</strong>
              </li>
              <li>• Atrasos devem ser justificados</li>
              <li>• Medidas concluídas não necessitam acompanhamento detalhado</li>
            </ul>
          </div>

          <div className="text-center mt-12">
            <p className="text-4xl font-bold text-blue-800">Obrigada!</p>
          </div>
        </div>
      ),
    },
  ]

  const proximoSlide = () => {
    setSlideAtual((prev) => (prev + 1) % slides.length)
  }

  const slideAnterior = () => {
    setSlideAtual((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const slide = slides[slideAtual]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl">
        {/* Slide Container */}
        <div className="bg-white rounded-lg shadow-2xl p-8 min-h-[600px] flex flex-col">
          {/* Header */}
          <div className="mb-6 border-b-4 border-blue-600 pb-4">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">{slide.titulo}</h1>
            <p className="text-lg text-blue-600 font-semibold">{slide.subtitulo}</p>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-auto">{slide.conteudo}</div>

          {/* Footer com Logo MPDFT */}
          <div className="mt-6 pt-4 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-600 font-semibold">MPDFT - Secretaria de Controle Interno</div>
            <div className="text-sm text-gray-500">
              Slide {slideAtual + 1} de {slides.length}
            </div>
          </div>
        </div>

        {/* Controles de Navegação */}
        <div className="flex justify-between mt-6">
          <button
            onClick={slideAnterior}
            className="bg-white hover:bg-blue-50 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-all"
            disabled={slideAtual === 0}
          >
            <ChevronLeft size={24} />
            Anterior
          </button>

          <button
            onClick={proximoSlide}
            className="bg-white hover:bg-blue-50 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-lg flex items-center gap-2 transition-all"
            disabled={slideAtual === slides.length - 1}
          >
            Próximo
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApresentacaoComite
