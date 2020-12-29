import { useRef, useState, useEffect } from 'react';
import JsPDF from 'jspdf';

function JsxToPdf(props) {
  const {
    name, scale, x, y, options, children,
  } = props;

  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState(false);
  const [errorText, updateErrorText] = useState('');

  const jsxRef = useRef();
  const doc = new JsPDF(options);

  useEffect(() => {
    updateError(false);
    updateErrorText('');
  }, []);

  function convertToPdf() {
    if (!jsxRef.current) {
      updateError(true);
      updateErrorText('JSX Ref must be specified');
    }

    try {
      updateLoading(true);
      doc.html(jsxRef.current, {
        html2canvas: {
          allowTaint: true,
          useCORS: true,
          scale,
        },
        callback: async (pdfDoc) => {
          pdfDoc.save(name);
        },
        x,
        y,
      });
    } catch (ex) {
      updateError(true);
      updateErrorText(ex);
      updateLoading(false);
    }
  }

  return children({
    save: convertToPdf, jsxRef, loading, error, errorText,
  });
}

JsxToPdf.defaultProps = {
  name: 'jsxToPdf',
  scale: 1,
  x: 0,
  y: 0,
  options: {
    orientation: 'p',
    unit: 'pt',
    format: 'a4',
  },
};

export default JsxToPdf;
