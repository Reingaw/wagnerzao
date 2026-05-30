import { ReduceProviders } from "./ReduceProviders";
import { ToastProvider } from "../context/ToastContext";
import { LanguageProvider } from "../context/LanguageContext";

const providers = [ToastProvider, LanguageProvider];

export const CombinedProviders = ReduceProviders(providers);
