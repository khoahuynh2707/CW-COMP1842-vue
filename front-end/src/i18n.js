import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  vi: {
    Login: 'Chào mừng đến với trang CRUD',
    loginFailed: 'Sai tên đăng nhập hoặc mật khẩu',
    Logout: 'Đăng xuất',
    title: 'Quản lý sách',
    home: 'Trang chủ',
    addBook: 'Thêm sách',
    report: 'Báo cáo',
    submit: 'Lưu',
    edit: 'Sửa',
    delete: 'Xoá',
    show: 'Xem',
    backToList: 'Quay lại danh sách',
    titleLabel: 'Tên sách',
    author: 'Tác giả',
    genre: 'Thể loại',
    year: 'Năm xuất bản',
    editBook: 'Chỉnh sửa sách',
    details: 'Chi tiết sách',
    noBooks: 'Không có sách nào phù hợp.',
    totalBooks: 'Tổng số sách'
  },
  en: {
    Login: 'Welcome to CRUD Web',
    loginFailed: 'Invalid username or password',
    Logout: 'Logout',
    title: 'Book Manager',
    home: 'Home',
    addBook: 'Add Book',
    report: 'Report',
    submit: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    show: 'View',
    backToList: 'Back to list',
    titleLabel: 'Book name',
    author: 'Author',
    genre: 'Genre',
    year: 'Year',
    editBook: 'Edit Book',
    details: 'Book Details',
    noBooks: 'No books found.',
    totalBooks: 'Total Books',
    username: 'Username',
    password: 'Password',
    login: 'Login',
    register: 'Register',
    noAccount: 'Don\'t have an account?'
  },
  ja: {
    Login: 'CRUD Webへようこそ',
    loginFailed: 'ユーザー名またはパスワードが無効です',
    Logout: 'ログアウト',
    title: '書籍管理',
    home: 'ホーム',
    addBook: '本を追加',
    report: 'レポート',
    submit: '保存',
    edit: '編集',
    delete: '削除',
    show: '表示',
    backToList: '一覧に戻る',
    titleLabel: 'タイトル',
    author: '著者',
    genre: 'ジャンル',
    year: '出版年',
    editBook: '本を編集',
    details: '本の詳細',
    noBooks: '該当する本がありません。',
    totalBooks: '総冊数'
  }
};

export default new VueI18n({
  locale: 'vi',           
  fallbackLocale: 'en',  
  messages
});
