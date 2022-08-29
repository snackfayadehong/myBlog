//  获取用户真实ip
const getRealIp = req => {
  if (!req) return "";
  return (
    req.headers["x-forwarded-for"] || //一个透明的代理服务器在把用户的请求转到下一环节的服务器时，会在HTTP的头中加入一条X-Forwarded-For记录，用来记录用户的真实IP，其形式为X-Forwarded-For:用户IP
    req.connection?.remoteAddress ||
    req.socket?.remoteAddress ||
    req.connection?.socket?.remoteAddress ||
    req.ip
  );
};

module.exports = {
  getRealIp
};
