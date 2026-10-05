import React, { useEffect, useRef } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface MathFormulaProps {
  formula: string;
  block?: boolean;
}

export const MathFormula: React.FC<MathFormulaProps> = ({ formula, block = false }) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(formula, containerRef.current, {
          displayMode: block,
          throwOnError: false
        });
      } catch (e) {
        containerRef.current.innerText = formula;
      }
    }
  }, [formula, block]);

  return <span ref={containerRef} className={block ? 'math-block' : 'math-inline'} />;
};
