import React, { useState } from 'react';
import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

import 'spectre.css/dist/spectre.min.css';

function EncryptForm(props: { initialTarget: string }) {
  const [target, setTarget] = useState(props.initialTarget);
  const [secret, setSecret] = useState('');
  const [result, setResult] = useState('');
  const [resultURL, setResultURL] = useState('');

  const handleEncrypt = () => {
    if (target && secret) {
      const encrypted = AES.encrypt(target, secret).toString();
      setResult(encrypted);

      const currentDomain = window.location.origin;
      const encodedString = encodeURIComponent(encrypted);
      const finalURL = `${currentDomain}/KeyLinker/${encodedString}`;
      setResultURL(finalURL);
    }
  };
  const handleDecrypt = () => {
    if (target && secret) {
      const decrypted = AES.decrypt(target, secret).toString(Utf8);
      setResult(decrypted);
    }
  };

  return (
    <div className="container">
      <div className="form-group">
        <label className="form-label" htmlFor="input-example-target">Target text</label>
        <textarea
          className="form-input"
          id="input-example-target"
          placeholder="Target text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="input-example-secret">Secret key</label>
        <input
          className="form-input"
          type="text"
          id="input-example-secret"
          placeholder="Secret key"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleDecrypt}>Decrypt</button>
      <button className="btn btn-secondary" onClick={handleEncrypt}>Encrypt</button>

      <div className="form-group">
        <label className="form-label" htmlFor="input-example-result">Result</label>
        <input
          className="form-input"
          type="text"
          id="input-example-result"
          value={result}
          readOnly
        />
      </div>

      <div className="form-group">
        <p><a href={resultURL}>{resultURL}</a></p>
      </div>
    </div>
  );
}

export default EncryptForm;
