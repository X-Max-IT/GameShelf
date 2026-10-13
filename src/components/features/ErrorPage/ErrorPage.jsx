import {
  isRouteErrorResponse,
  useRevalidator,
  useRouteError,
} from "react-router-dom";
import StateMessage from "../../ui/StateMessage/StateMessage";
import Button from "../../ui/Button/Button";

function ErrorPage() {
  const error = useRouteError();
  const { revalidate } = useRevalidator();

  if (isRouteErrorResponse(error)) {
    return error.status === 404 ? (
      <StateMessage emotion="🤷‍♂️" status="404" title="Страница не найдена">
        <Button to={"/"} className="small">
          На главную
        </Button>
      </StateMessage>
    ) : (
      <StateMessage
        emotion="😴"
        title={`Ошибка ${error.status}`}
        message="Сервер молчит"
      ></StateMessage>
    );
  }
  if (error instanceof Error) {
    return (
      <StateMessage
        title={error.message}
        message="Не удалось загрузить игры :("
      >
        <Button size="small" onClick={revalidate}>
          Повторить
        </Button>
        <Button size="small" to={"/"}>
          На главную
        </Button>
      </StateMessage>
    );
  }
  return (
    <StateMessage
      emotion="😓"
      title="Ой, что-то пошло не так..."
      message="Скоро всё починим, честно"
    >
      <Button onClick={revalidate}>Повторить попытку</Button>
    </StateMessage>
  );
}

export default ErrorPage;
