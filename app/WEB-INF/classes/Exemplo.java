import java.io.IOException;
import javax.servlet.*;

public class Exemplo implements Servlet{

    @Override
    public void service(ServletRequest req, ServletResponse res)
                        throws ServletException, IOException{
        ServletOutputStream sos = res.getOutputStream();
        sos.println("<html>");
        sos.println("<head>");
        sos.println("<title>Olá Servlet</title>");
        sos.println("</head>");
        sos.println("<body>");
        sos.println("Bem vindo ao meu primeiro Servlet");
        sos.println("</body>");
        sos.println("</html>");
    }

    @Override
    public void init(ServletConfig config) throws ServletException {    }

    @Override
    public ServletConfig getServletConfig() {
            return null;
        }

    @Override
    public String getServletInfo(){
        return null;
        }

    @Override
    public void destroy(){  }
}