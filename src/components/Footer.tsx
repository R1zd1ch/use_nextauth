import Link from 'next/link';

function Footer() {
  return (
    <footer className="border-t bg-white py-6 mt-8 mx-4 text-sm text-gray-600 rounded-lg shadow-2xl shadow-black/60">
      <div className="container mx-auto flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0">
        {/* Логотип и права */}
        <div className="text-center md:text-left">
          <p>© {new Date().getFullYear()} Пытаюсь заюзать авторизацию.</p>
        </div>

        {/* Ссылки */}
        <div className="flex space-x-4">
          <Link href="/about" passHref>
            <span className="hover:text-gray-900 cursor-pointer">О нас</span>
          </Link>
          <Link href="/privacy" passHref>
            <span className="hover:text-gray-900 cursor-pointer">Политика конфиденциальности</span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-gray-900 cursor-pointer">Контакты</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
