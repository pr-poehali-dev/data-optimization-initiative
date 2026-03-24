import { useState } from "react";
import {
  Download,
  Shield,
  Zap,
  Eye,
  Clock,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  TrendingUp,
  Activity,
  BarChart2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация в стиле Discord */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">CryptoHFT</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Высокочастотный торговый бот для биткоина</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <Icon name="LineChart" size={16} className="mr-2" />
              Результаты
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Начать торговлю
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <Icon name="LineChart" size={16} className="mr-2" />
                Результаты
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Начать торговлю
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {["B", "E", "K", "C"].map((label, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2]"
            >
              <span className="text-[#dcddde] text-sm font-bold">{label}</span>
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">CryptoHFT</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Торговля</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий", "btc-usdt", "сигналы", "результаты"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Биржи</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Binance", "Bybit"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Activity className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">Т</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Трейдер</div>
                <div className="text-[#3ba55c] text-xs truncate">● В сети</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">btc-usdt</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Высокочастотная торговля BTC на топовых биржах</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">
              {/* Приветственное сообщение бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">CryptoHFT Бот</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 00:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в CryptoHFT!</strong> Автоматическая высокочастотная торговля биткоином 24/7.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет CryptoHFT:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>Исполняет тысячи ордеров в секунду</li>
                        <li>Торгует на Binance, Bybit, OKX одновременно</li>
                        <li>Реагирует на рыночные изменения за миллисекунды</li>
                        <li>Управляет рисками и стоп-лоссами автоматически</li>
                        <li>Работает без остановок 24/7/365</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение с демо статуса торговли */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">А</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Алексей Трейдер</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 03:17</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Бот снова сделал иксы пока я спал 🚀
                  </div>

                  {/* Демо Rich Presence — торговый статус */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#1a3a2a] to-[#0f2d1f] relative flex items-center px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                        <span className="text-[#3ba55c] text-xs font-semibold uppercase tracking-wider">Торговля активна</span>
                      </div>
                      <div className="absolute -bottom-3 sm:-bottom-4 left-3 sm:left-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-[#2f3136] bg-[#1a3a2a] overflow-hidden flex items-center justify-center">
                          <TrendingUp className="w-7 h-7 text-[#3ba55c]" />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-[#3ba55c] border-4 border-[#2f3136] rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 sm:pt-6 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-lg sm:text-xl font-bold mb-1">CryptoHFT</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <span className="text-[#3ba55c] font-semibold">+2.4% сегодня</span>
                          <span>·</span>
                          <span>BTC/USDT</span>
                        </div>
                      </div>

                      <div className="mb-3 sm:mb-4">
                        <div className="bg-[#36393f] rounded-lg p-2 sm:p-3 relative">
                          <div className="absolute -top-2 left-3 sm:left-4 w-4 h-4 bg-[#36393f] rotate-45"></div>
                          <div className="flex items-center gap-2 text-[#dcddde] text-xs sm:text-sm">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#3ba55c] rounded-full flex items-center justify-center">
                              <span className="text-xs">↑</span>
                            </div>
                            <span>Исполнено 1,247 ордеров за час</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          О системе
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Активность
                        </button>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">
                          <span>Торгует прямо сейчас</span>
                        </div>

                        <div className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 bg-[#36393f] rounded-lg">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#f7931a] to-[#e8820c] rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-white font-bold text-lg">₿</span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold text-xs sm:text-sm mb-1">CryptoHFT</div>
                            <div className="text-[#dcddde] text-xs sm:text-sm mb-1">BTC/USDT · Binance</div>
                            <div className="text-[#b9bbbe] text-xs sm:text-sm mb-2">Спред-скальпинг стратегия</div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                              <span className="text-[#3ba55c] text-xs font-medium">Активно 6ч 23мин</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Блок с цифрами */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">CryptoHFT Бот</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 06:00</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Статистика за последние 30 дней:
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 max-w-lg">
                    {[
                      { label: "Средняя доходность", value: "+18.3%", color: "text-[#3ba55c]" },
                      { label: "Ордеров в сутки", value: "28,400+", color: "text-[#5865f2]" },
                      { label: "Задержка", value: "<1мс", color: "text-[#faa61a]" },
                      { label: "Uptime", value: "99.9%", color: "text-[#3ba55c]" },
                    ].map((stat, i) => (
                      <div key={i} className="bg-[#2f3136] rounded-lg p-2 sm:p-3 text-center">
                        <div className={`text-base sm:text-xl font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-[#8e9297] text-xs mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Блок функций */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Михаил</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 09:41</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    А что по безопасности и рискам?
                  </div>
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-3 sm:p-4 w-full max-w-sm">
                    <h3 className="text-white font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
                      <BarChart2 className="w-4 h-4 text-[#5865f2]" />
                      Ключевые возможности
                    </h3>
                    <div className="space-y-1">
                      {[
                        {
                          icon: <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                          title: "Скорость исполнения <1мс",
                          desc: "Прямое подключение к биржевым API",
                        },
                        {
                          icon: <Eye className="w-4 h-4 sm:w-5 sm:h-5" />,
                          title: "Мониторинг 24/7",
                          desc: "Анализ стакана и книги ордеров в реальном времени",
                        },
                        {
                          icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
                          title: "Автоматическое управление рисками",
                          desc: "Стоп-лосс и тейк-профит по алгоритму",
                        },
                        {
                          icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                          title: "Защита капитала",
                          desc: "Лимиты на просадку и дневные потери",
                        },
                        {
                          icon: <Download className="w-4 h-4 sm:w-5 sm:h-5" />,
                          title: "Мультибиржевая торговля",
                          desc: "Binance, Bybit, OKX одновременно",
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                        >
                          <div className="text-[#5865f2] mt-0.5">{feature.icon}</div>
                          <div>
                            <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                            <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3">
                <div className="text-[#72767d] text-xs sm:text-sm">Сообщение #btc-usdt</div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Активные боты — 3</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "HFT-Bot Binance",
                    status: "BTC/USDT · +1.8% сегодня",
                    avatar: "₿",
                    color: "from-orange-500 to-yellow-500",
                  },
                  {
                    name: "HFT-Bot Bybit",
                    status: "BTC/USDT · +0.9% сегодня",
                    avatar: "₿",
                    color: "from-blue-500 to-indigo-500",
                  },
                  {
                    name: "HFT-Bot OKX",
                    status: "BTC/USDT · +0.7% сегодня",
                    avatar: "₿",
                    color: "from-green-500 to-emerald-500",
                  },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-bold">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#3ba55c] text-xs truncate">{user.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-3">Старт</h3>
              <Button className="w-full bg-[#5865f2] hover:bg-[#4752c4] text-white text-sm font-medium py-2 rounded">
                Начать торговлю
              </Button>
              <p className="text-[#8e9297] text-xs mt-2 text-center">Минимальный депозит $500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
