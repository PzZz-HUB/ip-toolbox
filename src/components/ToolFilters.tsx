

interface ToolFiltersProps {
  search: string;
  setSearch: (val: string) => void;
  platform: string;
  setPlatform: (val: string) => void;
  category: string;
  setCategory: (val: string) => void;
}

const PLATFORMS = ['全部', 'Windows', 'macOS', 'Linux'];
const CATEGORIES = ['全部', '文件传输', '视频工具', '网络工具', 'AI 工具', '浏览器工具', '开发工具'];

export function ToolFilters({ search, setSearch, platform, setPlatform, category, setCategory }: ToolFiltersProps) {
  return (
    <div className="filters-section">
      <label htmlFor="search-input" className="filter-title" style={{ display: 'none' }}>搜索工具</label>
      <input 
        id="search-input"
        type="text" 
        className="search-input" 
        placeholder="输入工具名称、描述或分类关键字搜索..." 
        value={search}
        onChange={e => setSearch(e.target.value)}
        aria-label="搜索工具"
      />

      <div className="filter-group">
        <span className="filter-title">支持平台</span>
        <div className="filter-options" role="group" aria-label="按支持平台筛选">
          {PLATFORMS.map(p => (
            <button 
              key={p} 
              className="filter-btn" 
              aria-pressed={platform === p || (p === '全部' && platform === '')}
              onClick={() => setPlatform(p === '全部' ? '' : p)}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-title">工具分类</span>
        <div className="filter-options" role="group" aria-label="按工具分类筛选">
          {CATEGORIES.map(c => (
            <button 
              key={c} 
              className="filter-btn" 
              aria-pressed={category === c || (c === '全部' && category === '')}
              onClick={() => setCategory(c === '全部' ? '' : c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
