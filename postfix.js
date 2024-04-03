import React, { useState } from 'react';

const PostfixEvalu = () => {
  const [postfixExpression, setPostfixExpression] = useState('');
  const [result, setResult] = useState('');
  const [resultExpression, setResultExpression] = useState('');

  const evaluatePostfix = () => {
    const stack = [];

    for (let i = 0; i < postfixExpression.length; i++) {
      const char = postfixExpression[i];

      if (!isNaN(parseInt(char))) {
        stack.push(parseInt(char));
      } else {
        const operand2 = stack.pop();
        const operand1 = stack.pop();

        switch (char) {
          case '+':
            stack.push(operand1 + operand2);
            break;
          case '-':
            stack.push(operand1 - operand2);
            break;
          case '*':
            stack.push(operand1 * operand2);
            break;
          case '/':
            stack.push(operand1 / operand2);
            break;
          default:
            break;
        }
      }
    }

    const evaluatedResult = stack.pop();
    setResult(evaluatedResult);

    const expression = postfixExpression + ' will evaluate to ' + evaluatedResult;
    setResultExpression(expression);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter postfix expression"
        value={postfixExpression}
        onChange={(e) => setPostfixExpression(e.target.value)}
      />
      <button onClick={evaluatePostfix}>Evaluate</button>
      {resultExpression !== '' && (
        <div>
          {resultExpression}
        </div>
      )}
    </div>
  );
};

export default PostfixEvalu;
