import { ReduceProviders } from "./ReduceProviders";
import { ToastProvider } from "../context/ToastContext";

const providers = [ToastProvider];

export const CombinedProviders = ReduceProviders(providers);
