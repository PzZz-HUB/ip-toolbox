export function Footer() {
  return (
    <footer>
      <div className="container">
        <p style={{ marginBottom: '0.5rem' }}>
          &copy; {new Date().getFullYear()} IP Toolbox. All open-source tools listed belong to their respective developers.
        </p>
        <p style={{ fontSize: '0.85rem' }}>
          本站仅提供官方链接索引与使用指南，不托管任何可执行文件。安装前请务必核对数字签名。
        </p>
        <div className="footer-links">
          <a href="https://example.com" target="_blank" rel="noopener noreferrer" aria-label="返回 IP 检测网站 (在新窗口打开)">
            返回 IP 检测网站 ↗
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="项目开源地址 (在新窗口打开)">
            GitHub 源码 ↗
          </a>
        </div>
      </div>
    </footer>
  );
}
