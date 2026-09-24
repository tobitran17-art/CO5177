export const header = [
  {
    title: 'Trang chủ',
    children: [
      {
        title: 'Trang giới thiệu nhóm T&D', desc: 'Nền tảng lập trình cho phân tích và trực quan dữ liệu', img: 'https://gw.alipayobjects.com/zos/rmsportal/fLPzRmwAurHkPDVfHHiQ.svg', link: '#',
      },
    ],
  },
  {
    title: 'Bài tập lớn',
    children: [
      {
        title: 'Tabular', desc: 'Dữ liệu bảng', img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg', link: 'https://tobitran17-art.github.io/CO5177/tabular/',
      },
      {
        title: 'Text', desc: 'Dữ liệu văn bản', img: 'https://gw.alipayobjects.com/zos/rmsportal/qkNZxQRDqvFJscXVDmKp.svg', link: 'https://tobitran17-art.github.io/CO5177/text/',
      },
      {
        title: 'Time series', desc: 'Dữ liệu chuỗi thời gian', img: 'https://gw.alipayobjects.com/zos/rmsportal/MrUQjZNOJhYJCSZZuJDr.svg', link: 'https://tobitran17-art.github.io/CO5177/timeseries/',
      },
    ],
  },
  {
    title: 'Công nghệ',
    children: [
      {
        title: 'Python & Scikit-learn', desc: 'Xử lý và mô hình hóa dữ liệu', img: 'https://gw.alipayobjects.com/zos/rmsportal/ruHbkzzMKShUpDYMEmHM.svg', link: 'https://scikit-learn.org',
      },
      {
        title: 'Pandas & NumPy', desc: 'Tiền xử lý dữ liệu', img: 'https://gw.alipayobjects.com/zos/rmsportal/crqUoMinEgjMeGGFAKzG.svg', link: 'https://pandas.pydata.org',
      },
    ],
  },
  {
    title: 'Về nhóm',
    children: [
      {
        title: 'Nhóm T&D', desc: 'Trần Hữu Anh Triết & Ngô Minh Đại', img: 'https://gw.alipayobjects.com/zos/rmsportal/VsVqfjYxPTJaFbPcZqMb.svg', link: '#footer',
      },
    ],
  },
];
export const banner = [
  {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
    imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
    className: 'seeconf-wrap',
    children: [
      { children: 'Nền tảng lập trình cho phân tích và trực quan dữ liệu', className: 'seeconf-en-name' },
      { children: 'Nhóm T&D', className: 'seeconf-title', tag: 'h1' },
      { children: 'Trần Hữu Anh Triết & Ngô Minh Đại', className: 'seeconf-cn-name' },
      {
        children: 'Xem bài tập lớn',
        className: 'banner-button',
        tag: 'button',
        link: '#page1',
      },
      { children: 'Đại học Bách Khoa – ĐHQG-HCM · Khoa Khoa học và Kỹ thuật Máy tính', className: 'seeconf-time' },
    ],
  },
];
export const page1 = {
  title: 'Các bài tập lớn con',
  children: [
    {
      title: 'Tabular',
      content: 'Dữ liệu bảng — bắt buộc',
      src: require('./static/icons/tabular.svg'),
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.08)',
      link: 'https://tobitran17-art.github.io/CO5177/tabular/',
    },
    {
      title: 'Text',
      content: 'Dữ liệu văn bản — bắt buộc',
      src: require('./static/icons/text.svg'),
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.08)',
      link: 'https://tobitran17-art.github.io/CO5177/text/',
    },
    {
      title: 'Time series',
      content: 'Dữ liệu chuỗi thời gian — tự chọn',
      src: require('./static/icons/timeseries.svg'),
      color: '#AB33F7',
      shadowColor: 'rgba(112, 73, 166, 0.08)',
      link: 'https://tobitran17-art.github.io/CO5177/timeseries/',
    },
  ],
};

export const footer = [
  {
    title: 'Thông tin môn học',
    children: [
      { title: 'Trường Đại học Bách Khoa – ĐHQG-HCM', link: '#' },
      { title: 'Khoa Khoa học và Kỹ thuật Máy tính', link: '#' },
      { title: 'Nền tảng lập trình cho phân tích và trực quan dữ liệu', link: '#' },
      { title: 'Giảng viên: Lê Thành Sách', link: '#' },
    ],
  },
  {
    title: 'Thông tin nhóm — T&D',
    children: [
      { title: 'Trần Hữu Anh Triết', desc: 'MSSV: 2470745', link: 'https://github.com/TrietTran1701' },
      { title: 'Ngô Minh Đại', desc: 'MSSV: đang cập nhật', link: '#' },
    ],
  },
  {
    title: 'Bài tập lớn con',
    children: [
      { title: 'Tabular', link: 'https://tobitran17-art.github.io/CO5177/tabular/' },
      { title: 'Text', link: 'https://tobitran17-art.github.io/CO5177/text/' },
      { title: 'Time series', link: 'https://tobitran17-art.github.io/CO5177/timeseries/' },
    ],
  },
  {
    title: 'Mã nguồn',
    children: [
      { title: 'Repository GitHub của nhóm', link: 'https://github.com/tobitran17-art/CO5177' },
    ],
  },
];

// preload icons
if (typeof document !== 'undefined') {
  const div = document.createElement('div');
  div.style.display = 'none';
  document.body.appendChild(div);
  page1.children.forEach(({ src }) => {
    const img = new Image();
    img.src = src;
    div.appendChild(img);
  });
}
