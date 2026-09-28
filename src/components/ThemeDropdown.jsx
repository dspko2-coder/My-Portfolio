import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiSun, FiMoon, FiMonitor, FiChevronDown, FiCheck } from "react-icons/fi";
import { selectThemeMode, setTheme } from "../store/themeSlice";

const OPTIONS = [
  { value: "light", label: "Light", Icon: FiSun },
  { value: "dark", label: "Dark", Icon: FiMoon },
  { value: "system", label: "System", Icon: FiMonitor },
];

const ThemeDropdown = ({ className = "" }) => {
  const dispatch = useDispatch();
  const mode = useSelector(selectThemeMode);
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  const current = OPTIONS.find((o) => o.value === mode) || OPTIONS[2];
  const CurrentIcon = current.Icon;

  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const select = (value) => {
    dispatch(setTheme(value));
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`Theme: ${current.label}`}
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-10 items-center gap-2 rounded-full border border-line bg-soft px-3.5 text-sm text-ink transition-colors duration-200 hover:border-accent/60"
      >
        <CurrentIcon size={15} className="text-accent" aria-hidden="true" />
        <span className="hidden font-body sm:inline">{current.label}</span>
        <FiChevronDown
          size={14}
          aria-hidden="true"
          className={`text-mist transition-transform duration-300 ease-calm ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Select theme"
          className="absolute right-0 top-full z-50 mt-2 w-40 animate-scaleFade overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-lift"
        >
          {OPTIONS.map(({ value, label, Icon }) => {
            const selected = value === mode;
            return (
              <li key={value} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => select(value)}
                  className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors duration-200 ${
                    selected
                      ? "bg-accent-soft text-accent"
                      : "text-mist hover:bg-soft hover:text-ink"
                  }`}
                >
                  <Icon size={15} aria-hidden="true" />
                  <span className="flex-1 font-body">{label}</span>
                  {selected && <FiCheck size={14} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ThemeDropdown;
