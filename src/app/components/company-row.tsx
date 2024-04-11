import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import StatusLabel from '@/app/components/status-label';
import { Company } from '@/lib/api';

export interface CompanyRowProps {
  company: Company;
}

export default function CompanyRow({ company }: CompanyRowProps) {
  return (
    <tr className="h-14 text-center text-gray-900 bg-white">
      <td className="text-xs font-medium text-blue-700 rounded-1 border-1-4 border-blue-700">
        {company.categoryTitle}
      </td>
      <td>
        <a href={`/companies/${company.id}`}>{company.title}</a>
      </td>
      <td>
        <StatusLabel status={company.status} />
      </td>
      <td>
        <div className="inline-flex items-center gap-1">
          <Image
            width={16}
            height={16}
            src={`/icons/${company.hasPromotion ? 'check' : 'x-mark'}.svg`}
            alt="promotion icon"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              company.hasPromotion ? 'text-green-700' : 'text-red-700',
            )}
          >
            {company.hasPromotion ? 'Yes' : 'No'}
          </span>
        </div>
      </td>
      <td>{company.countryTitle}</td>
      <td className="rounded-r">
        {new Date(company.joinedDate).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
