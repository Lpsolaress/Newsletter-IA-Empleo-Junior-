import React from 'react';

export default function ContentCard() {
    return (
        <div className="content-card">
            <h2 className="content-title"><span>#</span> El nuevo estándar</h2>
            <p className="content-text">El mercado laboral ya no busca juniors que solo memoricen; busca talento que sepa amplificar sus habilidades con Inteligencia Artificial.</p>

            <div className="bullet">
                <div className="bullet-number">01</div>
                <div className="bullet-content">
                    <h4>No temas a la automatización</h4>
                    <p>La IA no te reemplazará. Te reemplazará alguien que sepa usarla mejor que tú. Empieza hoy.</p>
                </div>
            </div>

            <div className="bullet">
                <div className="bullet-number">02</div>
                <div className="bullet-content">
                    <h4>Crea un portfolio aumentado</h4>
                    <p>Muestra proyectos donde la IA haya sido tu copiloto: código optimizado, copys estructurados o datos analizados.</p>
                </div>
            </div>

            <div className="bullet">
                <div className="bullet-number">03</div>
                <div className="bullet-content">
                    <h4>Pensamiento Crítico</h4>
                    <p>La IA da respuestas rápidas, tú das el criterio. El valor real está en saber qué preguntar y cómo validar.</p>
                </div>
            </div>

            <div className="tools-section">
                <div className="tools-title">Herramientas Recomendadas</div>
                <div className="tools-grid">
                    <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer" className="tool-link">ChatGPT</a>
                    <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer" className="tool-link">Gemini</a>
                    <a href="https://claude.ai" target="_blank" rel="noopener noreferrer" className="tool-link">Claude</a>
                    <a href="https://www.perplexity.ai" target="_blank" rel="noopener noreferrer" className="tool-link">Perplexity</a>
                </div>
            </div>
        </div>
    );
}
