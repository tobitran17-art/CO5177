import { appHref } from './routes';

export const header = [
  {
    title: 'Bài tập lớn',
    children: [
      {
        title: 'Tabular', desc: 'Dữ liệu bảng', img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg', link: appHref('/tabular/'),
      },
      {
        title: 'Text', desc: 'Dữ liệu văn bản', img: 'https://gw.alipayobjects.com/zos/rmsportal/qkNZxQRDqvFJscXVDmKp.svg', link: appHref('/text/'),
      },
      {
        title: 'Image', desc: 'Dữ liệu ảnh', img: 'https://gw.alipayobjects.com/zos/rmsportal/zMeJnhxAtpXPZAUhUKJH.svg', link: appHref('/image/'),
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
];
export const banner = {
  img: 'https://gw.alipayobjects.com/zos/rmsportal/cTyLQiaRrpzxFAuWwoDQ.svg',
  imgMobile: 'https://gw.alipayobjects.com/zos/rmsportal/ksMYqrCyhwQNdBKReFIU.svg',
};

export const hero = {
  title: 'Nền tảng lập trình cho phân tích và trực quan dữ liệu',
  info: [
    { label: 'Trường', value: 'Đại học Bách Khoa – ĐHQG-HCM' },
    { label: 'Giảng viên', value: 'Lê Thành Sách' },
  ],
  members: [
    { name: 'Trần Hữu Anh Triết', mssv: '2470745' },
    { name: 'Ngô Minh Đại', mssv: '2470722' },
  ],
};
export const page1 = {
  title: 'Các bài tập',
  children: [
    {
      title: 'Tabular',
      content: 'Dữ liệu bảng — bắt buộc',
      src: require('./static/icons/tabular.svg'),
      color: '#1890FF',
      shadowColor: 'rgba(15, 93, 166, 0.08)',
      link: appHref('/tabular/'),
    },
    {
      title: 'Text',
      content: 'Dữ liệu văn bản — bắt buộc',
      src: require('./static/icons/text.svg'),
      color: '#EB2F96',
      shadowColor: 'rgba(166, 55, 112, 0.08)',
      link: appHref('/text/'),
    },
    {
      title: 'Image',
      content: 'Dữ liệu ảnh — tự chọn',
      src: require('./static/icons/image.svg'),
      color: '#13A8A8',
      shadowColor: 'rgba(19, 110, 110, 0.08)',
      link: appHref('/image/'),
    },
  ],
};

export const footer = [
  {
    title: 'Thông tin nhóm — T&D',
    children: [
      { title: 'Trần Hữu Anh Triết', desc: '', link: 'https://github.com/TrietTran1701' },
      { title: 'Ngô Minh Đại', desc: '', link: '#' },
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
