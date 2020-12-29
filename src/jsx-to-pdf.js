import { useRef, useState, useEffect } from 'react';
import JsPDF from 'jspdf';

function JsxToPdf(props) {
  const { children } = props;
  const [error, updateError] = useState(false);
  const [errorText, updateErrorText] = useState('');

  const jsxRef = useRef();
  const doc = new JsPDF();

  useEffect(() => {
    updateError(false);
    updateErrorText('');
  }, []);

  function convertToPdf() {
    if (!jsxRef.current) {
      updateError(true);
      updateErrorText('JSX Ref must be specified');
    }

    doc.html(jsxRef.current, {
      callback(pdfDoc) {
        pdfDoc.save();
      },
    });
  }

  return children({
    save: convertToPdf, jsxRef, error, errorText,
  });
}

export default JsxToPdf;
