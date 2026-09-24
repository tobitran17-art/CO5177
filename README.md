# CO5177 — Nền tảng lập trình cho phân tích và trực quan dữ liệu

Bài tập lớn của nhóm **T&D** (Trần Hữu Anh Triết – 2470745, Ngô Minh Đại).

## Landing page

Nguồn nằm trong [`landing-page/`](landing-page), dựa trên template
[ant-motion/experience-cloud-landing-page](https://github.com/ant-motion/experience-cloud-landing-page),
được Việt hóa toàn bộ nội dung và đổi font sang [Be Vietnam Pro](https://fonts.google.com/specimen/Be+Vietnam+Pro).

Trang được build và deploy tự động lên GitHub Pages qua GitHub Actions
(`.github/workflows/deploy-landing-page.yml`) mỗi khi có thay đổi trong `landing-page/`.

Chạy local:

```bash
cd landing-page
npm install --legacy-peer-deps
npm start
```

## Cấu trúc dự kiến

- `landing-page/` — trang giới thiệu chung của nhóm (GitHub Pages)
- `notebooks/` — notebook cho từng loại dữ liệu (Tabular, Text, Time series) — sẽ bổ sung
- `reports/` — báo cáo PDF từng bài — sẽ bổ sung
