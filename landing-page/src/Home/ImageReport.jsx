import React from 'react';
import DocumentTitle from 'react-document-title';
import Header from './Header';
import Footer from './Footer';
import Markdown from './markdown';
import { appHref } from './routes';
import reportMd from '../reports/image.md';
import './static/report.less';

export default function ImageReport() {
  return (
    <div className="report-page">
      <Header />
      <DocumentTitle title="Image — Nhóm T&D" />
      <main className="report">
        <a className="report-back" href={appHref('/')}>← Trang chủ</a>
        <Markdown source={reportMd} />
      </main>
      <Footer />
    </div>
  );
}
