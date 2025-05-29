import Image from "next/image";

interface UserCardProps {
  type: string;
  count?: number;
  trend?: number;
}

const UserCard = ({ type, count, trend }: UserCardProps) => {
  // Define ícones ou cores baseadas no tipo
  const getTypeDetails = () => {
    switch(type.toLowerCase()) {
      case 'usuários':
        return { bgColor: 'bg-[#c3ebfa]', trendColor: 'text-blue-500' };
      case 'empresas':
        return { bgColor: 'bg-[#FFF8AF]', trendColor: 'text-yellow-500' };
      case 'produtos':
        return { bgColor: 'bg-[#D1FAE5]', trendColor: 'text-green-500' };
      case 'fornecedores':
        return { bgColor: 'bg-[#FEE2E2]', trendColor: 'text-red-500' };
      default:
        return { bgColor: 'bg-gray-100', trendColor: 'text-gray-500' };
    }
  };

  const { bgColor, trendColor } = getTypeDetails();

  return (
    <div className={`rounded-2xl ${bgColor} p-4 flex-1 min-w-[130px]`}>
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
          {trend !== undefined && (
            <span className={`ml-1 ${trendColor}`}>
              {trend > 0 ? '↑' : trend < 0 ? '↓' : ''} {Math.abs(trend)}%
            </span>
          )}
        </span>
        <Image src="/more.png" alt="Mais opções" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">
        {count !== undefined ? count.toLocaleString() : '--'}
      </h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;