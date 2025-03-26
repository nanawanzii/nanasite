import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';

/**
 * 可重用的LaTeX公式组件
 * @param {Object} props - 组件属性
 * @param {string} props.formula - LaTeX格式的公式
 * @param {boolean} props.block - 是否为块级公式(默认为false，即行内公式)
 * @param {string} props.description - 公式说明(可选)
 */
const LatexFormula = ({ formula, block = false, description }) => {
  return (
    <div className={`latex-formula ${block ? 'block-formula' : 'inline-formula'}`}>
      {description && <p className="formula-description">{description}</p>}
      {block ? (
        <BlockMath math={formula} />
      ) : (
        <InlineMath math={formula} />
      )}
    </div>
  );
};

export default LatexFormula;
