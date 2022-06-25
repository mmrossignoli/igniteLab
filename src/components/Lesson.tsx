import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link, useParams } from "react-router-dom";
interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableDataFormatted = format(
    props.availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    { locale: ptBR }
  );
  const isActiveLesson = slug === props.slug;
  return (
    <Link
      to={`${isLessonAvailable ? "/event/lesson/" + props.slug : "#"}`}
      className="group "
    >
      <span className="text-gray-300">{availableDataFormatted}</span>
      <div
        className={`rounded border border-gray-500 p-4 mt-2   ${
          isActiveLesson ? "bg-green-500" : ""
        } ${
          isLessonAvailable ? "group-hover:border-green-500" : "bg-gray-600"
        } `}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          {props.type === "live" ? (
            <span
              className={`text-xs rounded px-2 py-[0.125rem]  border  font-bold
            ${
              isActiveLesson
                ? "text-red-500 border-red-500"
                : "text-green-300 border-green-300"
            }`}
            >
              AO VIVO
            </span>
          ) : (
            <span
              className={`text-xs rounded px-2 py-[0.125rem] border font-bold
            ${
              isActiveLesson
                ? "text-white border-white"
                : "text-gray-300 border-green-300 "
            }`}
            >
              AULA PRÁTICA
            </span>
          )}
        </header>
        <strong
          className={`mt-5 block ${
            isActiveLesson ? "text-white" : "text-gray-300"
          }`}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
