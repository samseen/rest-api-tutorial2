export default {
    port: 1337,
    host: 'localhost',
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 10,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICXQIBAAKBgQCy1om0LDnxbLRHzyKWNFeac5Qa9L0EyReklk9k60F8W7GQQ1y3
    ccUdPqxFdYICs/Bb5GIu8uVukUGEQakd51ibRZZj0eDkY021cIF+xrsCVwsYjsMf
    jK4UChTI8YUviZ8Yt7WiZ7ZnqEoWFeB0WuN6MYibuzJedthd6BuAjGwlqwIDAQAB
    AoGBAKHHvi6FS62A3t2PHgSvOQh5weNYvp1TpNW5O/1ZbJYpBMoyhe9VNjGsfn8f
    PAth5+/Y/JDoHnEVaiVQmMJ6hAX+fJUXRuD5vSEjBoIfXPOuuheRDhxjskos7nyV
    v4BAx8wJU4gjrtfuglL9Ox0xa+rrIcYgMa239lev7eJNnmcRAkEA5v8WY27LxlUM
    6x63DiFD8OY0+a3a+8IsdPy49lHCjQNJwB8VKq7uH0BR46vg4SZq0enwUcRIDCu8
    xQZZ7gOvdQJBAMYyJBdMhPWETxW7MQ5jEGZyhIUSuPtKGWGr+ZzcFrydaUfjcPVj
    c26wNBrK3kvieF3hhlzzovq91YXAf69f/J8CQQCQ+vdlTwvsnkLuaye/YZeP4hzL
    vJedveBDSL8aMnSmJrMqNxgE4ygnSypad+07wu32dBrWZxhFM0pWascUwRFlAkBX
    o0ZIMyK7uZSKxGottWpEErE8convO9W7VaMbVEqNfoFWM2D4cNBTCoEPs9LV9T9K
    K/YQ1f6kJxrqeLM9JhF7AkABYKT+aclir/gqz4PgV5xcC/pkmXoQvhJoEdPrtWbw
    /A+4g9+LG9LdPOiJYWEt8SKX6P4G5RWTVHoc1+91c1aJ
    -----END RSA PRIVATE KEY-----`,
};