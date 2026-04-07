export const ReduceProviders =
  (providers: ReduceProvidersProps) =>
  ({ children }: ChildrenType) => {
    return providers.reduceRight((child, Provider) => {
      return <Provider>{child}</Provider>;
    }, children);
  };
