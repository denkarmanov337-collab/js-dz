function parseUrlParts(url) {
  const protocolEnd = url.indexOf("://");
  const protocol = url.slice(0, protocolEnd);

  const domainStart = protocolEnd + 3;
  const pathStart = url.indexOf("/", domainStart);
  const domain = url.slice(domainStart, pathStart);

  const queryStart = url.indexOf("?", pathStart);
  const uri = url.slice(pathStart, queryStart);

  const query = url.slice(queryStart + 1);

  return [protocol, domain, uri, query];
}