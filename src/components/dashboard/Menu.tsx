import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/dashboard",
        visible: ["admin", "empresa", "usuario"],
      },
      {
        icon: "/attendance.png",
        label: "Empresas",
        href: "/dashboard/company",
        visible: ["admin", "empresa"],
      },
      {
        icon: "/parent.png",
        label: "Usuários",
        href: "/dashboard/users",
        visible: ["admin", "empresa"],
      },
      {
        icon: "/result.png",
        label: "Produtos",
        href: "/dashboard/products",
        visible: ["admin", "empresa"],
      },
      {
        icon: "/calendar.png",
        label: "Cotações",
        href: "/dashboard/quotes",
        visible: ["admin", "empresa"],
      },
      {
        icon: "/lesson.png",
        label: "Fornecedores",
        href: "/dashboard/suppliers",
        visible: ["admin", "empresa"],
      },
      {
        icon: "/subject.png",
        label: "Avaliações de Fornecedores",
        href: "/dashboard/supplier-evaluation",
        visible: ["admin", "empresa"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Perfil",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/setting.png",
        label: "Configurações",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: "/logout.png",
        label: "Sair",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
