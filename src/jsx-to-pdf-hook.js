import { useRef, useState, useEffect } from 'react';
import JsPDF from 'jspdf';
import domToImage from 'dom-to-image';

function useJsxToPdf(options = {}) {
  const [loading, updateLoading] = useState(false);
  const [error, updateError] = useState(false);
  const [errorText, updateErrorText] = useState('');

  const jsxRef = useRef();

  const doc = new JsPDF(options);
  const defaultWidth = doc.internal.pageSize.getWidth();
  const defaultHeight = doc.internal.pageSize.getHeight();

  useEffect(() => {
    updateError(false);
    updateErrorText('');
  }, []);

  async function convertToPdf() {
    if (!jsxRef.current) {
      updateError(true);
      updateErrorText('JSX Ref must be specified');
    }

    try {
      const {
        x = 0, y = 0, width = defaultWidth, height = defaultHeight, domToImageOptions = {}, name,
      } = options;
      updateLoading(true);
      const imageData = await domToImage.toPng(jsxRef.current, { ...domToImageOptions });
      doc.addImage(imageData, 'PNG', x, y, width, height);
      doc.save(name);
    } catch (ex) {
      updateError(true);
      updateErrorText(ex);
    } finally {
      updateLoading(false);
    }
  }

  return {
    jsxRef,
    loading,
    error,
    errorText,
    convertToPdf,
  };
}

export default useJsxToPdf;
